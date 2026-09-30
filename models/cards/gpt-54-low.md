---
type: Model
title: GPT-5.4 (low)
creator: OpenAI
license: Proprietary
intelligence_index: 28.0
price_blended_usd_1m: 2.175
output_speed_tps: 68.0
context_window: 1050000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 72.0, z: 1.38, r: 70.7, estimated: false }  # 전문 지식
  reasoning: { s: 53.8, z: 0.8, r: 62.0, estimated: false }  # 추론
  coding: { s: 65.2, z: 1.01, r: 65.1, estimated: false }  # 코딩
  agentic: { s: 70.5, z: 1.23, r: 68.5, estimated: false }  # 에이전트
  trust: { s: 15.5, z: -0.5, r: 42.4, estimated: false }  # 신뢰성
  multimodal: { s: 86.3, z: 0.77, r: 61.6, estimated: false }  # 멀티모달
  long_context: { s: 86.5, z: 1.07, r: 66.1, estimated: false }  # 긴문맥
  instruction: { s: 76.1, z: 0.92, r: 63.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.4 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-30
timestamp: 2026-09-30T00:00:00Z
---

# GPT-5.4 (low)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **28.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 에이전트
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $2.5 · 출력 $15.0 · 혼합 $2.175/1M · 68.0 t/s · TTFT 2.03s · 1M ctx` · 가성비 12.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 70.7 | +1.38 | 실측 | [[aa-omniscience]] 48.0%×1.0, [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 31.0%×0.3 |
| 추론 | 62.0 | +0.8 | 실측 | [[critpt]] 7.0%×1.0, [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 31.0%×1.0 |
| 코딩 | 65.1 | +1.01 | 실측 | [[terminal-bench]] 43.0%×0.5 |
| 에이전트 | 68.5 | +1.23 | 실측 | [[tau2-bench]] 75.0%×1.0, [[terminal-bench]] 43.0%×1.0 |
| 신뢰성 | 42.4 | -0.5 | 실측 | [[aa-omniscience]] 17.0%×1.0 |
| 멀티모달 | 61.6 | +0.77 | 실측 | [[mmmu-pro]] 78.0%×1.0 |
| 긴문맥 | 66.1 | +1.07 | 실측 | [[aa-lcr]] 77.0%×1.0 |
| 지시 따르기 | 63.8 | +0.92 | 실측 | [[ifbench]] 66.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
