---
type: Model
title: GPT-5.5 (high)
creator: OpenAI
license: Proprietary
intelligence_index: 37.0
price_blended_usd_1m: 4.35
output_speed_tps: 85.0
context_window: 922000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 85.7, z: 2.08, r: 81.2, estimated: false }  # 전문 지식
  reasoning: { s: 82.7, z: 2.21, r: 83.2, estimated: false }  # 추론
  coding: { s: 84.7, z: 1.72, r: 75.9, estimated: false }  # 코딩
  agentic: { s: 79.3, z: 1.6, r: 73.9, estimated: false }  # 에이전트
  trust: { s: 9.3, z: -0.76, r: 38.5, estimated: false }  # 신뢰성
  multimodal: { s: 90.4, z: 1.0, r: 65.1, estimated: false }  # 멀티모달
  long_context: { s: 94.4, z: 1.34, r: 70.0, estimated: false }  # 긴문맥
  instruction: { s: 84.5, z: 1.29, r: 69.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.5 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-24
timestamp: 2026-09-24T00:00:00Z
---

# GPT-5.5 (high)

OpenAI · Proprietary · Unknown · 컨텍스트 922k · 종합지능 **37.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · 85.0 t/s · TTFT 21.54s · 922k ctx` · 가성비 8.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 81.2 | +2.08 | 실측 | [[aa-omniscience]] 57.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 45.0%×0.3 |
| 추론 | 83.2 | +2.21 | 실측 | [[critpt]] 25.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 45.0%×1.0 |
| 코딩 | 75.9 | +1.72 | 실측 | [[scicode]] 56.0%×1.0, [[terminal-bench]] 60.0%×0.5 |
| 에이전트 | 73.9 | +1.6 | 실측 | [[gdpval]] 40.0%×1.0, [[tau2-bench]] 93.0%×1.0, [[tau3-banking]] 37.0%×1.0, [[terminal-bench]] 60.0%×1.0 |
| 신뢰성 | 38.5 | -0.76 | 실측 | [[aa-omniscience]] 11.0%×1.0 |
| 멀티모달 | 65.1 | +1.0 | 실측 | [[mmmu-pro]] 81.0%×1.0 |
| 긴문맥 | 70.0 | +1.34 | 실측 | [[aa-lcr]] 84.0%×1.0 |
| 지시 따르기 | 69.3 | +1.29 | 실측 | [[ifbench]] 72.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
