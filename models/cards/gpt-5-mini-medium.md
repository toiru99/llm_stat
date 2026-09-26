---
type: Model
title: GPT-5 mini (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 21.0
price_blended_usd_1m: 0.2675
output_speed_tps: 109.0
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 43.8, z: 0.1, r: 51.5, estimated: false }  # 전문 지식
  reasoning: { s: 36.5, z: 0.04, r: 50.7, estimated: false }  # 추론
  coding: { s: 43.9, z: 0.31, r: 54.6, estimated: false }  # 코딩
  agentic: { s: 57.8, z: 0.77, r: 61.6, estimated: false }  # 에이전트
  trust: { s: 55.7, z: 1.4, r: 71.1, estimated: false }  # 신뢰성
  multimodal: { s: 74.0, z: 0.18, r: 52.7, estimated: false }  # 멀티모달
  long_context: { s: 80.9, z: 0.92, r: 63.9, estimated: false }  # 긴문맥
  instruction: { s: 83.1, z: 1.23, r: 68.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 mini (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-26
timestamp: 2026-09-26T00:00:00Z
---

# GPT-5 mini (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **21.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 전문 지식, 추론

## 실용 지표
`입력 $0.25 · 출력 $2.0 · 혼합 $0.2675/1M · 109.0 t/s · TTFT 12.73s · 400k ctx` · 가성비 78.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.5 | +0.1 | 실측 | [[aa-omniscience]] 23.0%×1.0, [[gpqa-diamond]] 80.0%×0.4, [[humanitys-last-exam]] 16.0%×0.3 |
| 추론 | 50.7 | +0.04 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 80.0%×1.0, [[humanitys-last-exam]] 16.0%×1.0 |
| 코딩 | 54.6 | +0.31 | 실측 | [[terminal-bench]] 29.0%×0.5 |
| 에이전트 | 61.6 | +0.77 | 실측 | [[tau2-bench]] 71.0%×1.0, [[terminal-bench]] 29.0%×1.0 |
| 신뢰성 | 71.1 | +1.4 | 실측 | [[aa-omniscience]] 56.0%×1.0 |
| 멀티모달 | 52.7 | +0.18 | 실측 | [[mmmu-pro]] 69.0%×1.0 |
| 긴문맥 | 63.9 | +0.92 | 실측 | [[aa-lcr]] 72.0%×1.0 |
| 지시 따르기 | 68.5 | +1.23 | 실측 | [[ifbench]] 71.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
