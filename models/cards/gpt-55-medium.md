---
type: Model
title: GPT-5.5 (medium)
creator: OpenAI
license: Proprietary
intelligence_index: 42.0
price_blended_usd_1m: 4.35
output_speed_tps: 72.0
context_window: 922000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 85.2, z: 2.14, r: 82.0, estimated: false }  # 전문 지식
  reasoning: { s: 75.5, z: 1.95, r: 79.2, estimated: false }  # 추론
  coding: { s: 87.9, z: 1.96, r: 79.4, estimated: false }  # 코딩
  agentic: { s: 75.5, z: 1.45, r: 71.8, estimated: false }  # 에이전트
  trust: { s: 8.2, z: -0.76, r: 38.5, estimated: false }  # 신뢰성
  multimodal: { s: 91.7, z: 1.06, r: 66.0, estimated: false }  # 멀티모달
  long_context: { s: 93.3, z: 1.36, r: 70.4, estimated: false }  # 긴문맥
  instruction: { s: 83.1, z: 1.28, r: 69.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.5 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# GPT-5.5 (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 922k · 종합지능 **42.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · 72.0 t/s · TTFT 11.65s · 922k ctx` · 가성비 9.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 82.0 | +2.14 | 실측 | [[aa-omniscience]] 57.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 42.0%×0.3 |
| 추론 | 79.2 | +1.95 | 실측 | [[critpt]] 19.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 42.0%×1.0 |
| 코딩 | 79.4 | +1.96 | 실측 | [[terminal-bench]] 58.0%×0.5 |
| 에이전트 | 71.8 | +1.45 | 실측 | [[gdpval]] 40.0%×1.0, [[tau2-bench]] 92.0%×1.0, [[tau3-banking]] 30.0%×1.0, [[terminal-bench]] 58.0%×1.0 |
| 신뢰성 | 38.5 | -0.76 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | 66.0 | +1.06 | 실측 | [[mmmu-pro]] 81.0%×1.0 |
| 긴문맥 | 70.4 | +1.36 | 실측 | [[aa-lcr]] 83.0%×1.0 |
| 지시 따르기 | 69.2 | +1.28 | 실측 | [[ifbench]] 71.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
