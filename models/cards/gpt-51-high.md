---
type: Model
title: GPT-5.1 (high)
creator: OpenAI
license: Proprietary
intelligence_index: 37.0
price_blended_usd_1m: 1.3375
output_speed_tps: 105.0
context_window: 272000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 66.3, z: 1.17, r: 67.6, estimated: false }  # 전문 지식
  reasoning: { s: 51.8, z: 0.85, r: 62.8, estimated: false }  # 추론
  coding: { s: 70.5, z: 0.96, r: 64.4, estimated: false }  # 코딩
  agentic: { s: 54.9, z: 0.77, r: 61.5, estimated: false }  # 에이전트
  trust: { s: 55.2, z: 1.21, r: 68.2, estimated: false }  # 신뢰성
  multimodal: { s: 85.7, z: 0.67, r: 60.1, estimated: false }  # 멀티모달
  long_context: { s: 98.7, z: 1.45, r: 71.7, estimated: false }  # 긴문맥
  instruction: { s: 85.9, z: 1.35, r: 70.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.1 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-06
timestamp: 2026-08-06T00:00:00Z
---

# GPT-5.1 (high)

OpenAI · Proprietary · Unknown · 컨텍스트 272k · 종합지능 **37.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $1.3375/1M · 105.0 t/s · TTFT 53.96s · 272k ctx` · 가성비 27.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 67.6 | +1.17 | 실측 | [[aa-omniscience]] 38.0%×1.0, [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 26.0%×0.3 |
| 추론 | 62.8 | +0.85 | 실측 | [[critpt]] 5.0%×1.0, [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 26.0%×1.0 |
| 코딩 | 64.4 | +0.96 | 실측 | [[scicode]] 43.0%×1.0, [[terminal-bench]] 45.0%×0.5 |
| 에이전트 | 61.5 | +0.77 | 실측 | [[gdpval]] 24.0%×1.0, [[tau2-bench]] 82.0%×1.0, [[tau3-banking]] 14.0%×1.0, [[terminal-bench]] 45.0%×1.0 |
| 신뢰성 | 68.2 | +1.21 | 실측 | [[aa-omniscience]] 49.0%×1.0 |
| 멀티모달 | 60.1 | +0.67 | 실측 | [[mmmu-pro]] 75.0%×1.0 |
| 긴문맥 | 71.7 | +1.45 | 실측 | [[aa-lcr]] 75.0%×1.0 |
| 지시 따르기 | 70.2 | +1.35 | 실측 | [[ifbench]] 73.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
