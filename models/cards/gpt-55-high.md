---
type: Model
title: GPT-5.5 (high)
creator: OpenAI
license: Proprietary
intelligence_index: 53.0
price_blended_usd_1m: None
output_speed_tps: 72.0
context_window: 922000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 91.4, z: 2.36, r: 85.4, estimated: false }  # 전문 지식
  reasoning: { s: 85.9, z: 2.58, r: 88.7, estimated: false }  # 추론
  coding: { s: 92.5, z: 1.89, r: 78.4, estimated: false }  # 코딩
  agentic: { s: 85.2, z: 1.89, r: 78.4, estimated: false }  # 에이전트
  trust: { s: 14.9, z: -0.62, r: 40.7, estimated: false }  # 신뢰성
  multimodal: { s: 94.3, z: 1.09, r: 66.4, estimated: false }  # 멀티모달
  long_context: { s: 96.1, z: 1.38, r: 70.7, estimated: false }  # 긴문맥
  instruction: { s: 84.5, z: 1.3, r: 69.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.5 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-03
timestamp: 2026-08-03T00:00:00Z
---

# GPT-5.5 (high)

OpenAI · Proprietary · Unknown · 컨텍스트 922k · 종합지능 **53.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $None/1M · 72.0 t/s · TTFT 27.25s · 922k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 85.4 | +2.36 | 실측 | [[aa-omniscience]] 56.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 43.0%×0.3 |
| 추론 | 88.7 | +2.58 | 실측 | [[critpt]] 25.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 43.0%×1.0 |
| 코딩 | 78.4 | +1.89 | 실측 | [[scicode]] 56.0%×1.0, [[terminal-bench]] 60.0%×0.5 |
| 에이전트 | 78.4 | +1.89 | 실측 | [[gdpval]] 48.0%×1.0, [[tau2-bench]] 93.0%×1.0, [[tau3-banking]] 29.0%×1.0, [[terminal-bench]] 60.0%×1.0 |
| 신뢰성 | 40.7 | -0.62 | 실측 | [[aa-omniscience]] 14.0%×1.0 |
| 멀티모달 | 66.4 | +1.09 | 실측 | [[mmmu-pro]] 81.0%×1.0 |
| 긴문맥 | 70.7 | +1.38 | 실측 | [[aa-lcr]] 73.0%×1.0 |
| 지시 따르기 | 69.4 | +1.3 | 실측 | [[ifbench]] 72.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
