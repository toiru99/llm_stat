---
type: Model
title: GPT-5.5 (high)
creator: OpenAI
license: Proprietary
intelligence_index: 55.0
price_blended_usd_1m: 4.35
output_speed_tps: 84.0
context_window: 922000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 88.8, z: 2.26, r: 83.9, estimated: false }  # 전문 지식
  reasoning: { s: 85.8, z: 2.47, r: 87.0, estimated: false }  # 추론
  coding: { s: 92.5, z: 1.82, r: 77.2, estimated: false }  # 코딩
  agentic: { s: 82.3, z: 1.8, r: 77.0, estimated: false }  # 에이전트
  trust: { s: 10.5, z: -0.74, r: 39.0, estimated: false }  # 신뢰성
  multimodal: { s: 94.3, z: 1.06, r: 65.8, estimated: false }  # 멀티모달
  long_context: { s: 95.2, z: 1.35, r: 70.3, estimated: false }  # 긴문맥
  instruction: { s: 84.5, z: 1.23, r: 68.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.5 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-16
timestamp: 2026-08-16T00:00:00Z
---

# GPT-5.5 (high)

OpenAI · Proprietary · Unknown · 컨텍스트 922k · 종합지능 **55.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 멀티모달, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · 84.0 t/s · TTFT 22.86s · 922k ctx` · 가성비 12.6

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 83.9 | +2.26 | 실측 | [[aa-omniscience]] 57.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 45.0%×0.3 |
| 추론 | 87.0 | +2.47 | 실측 | [[critpt]] 25.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 45.0%×1.0 |
| 코딩 | 77.2 | +1.82 | 실측 | [[scicode]] 56.0%×1.0, [[terminal-bench]] 60.0%×0.5 |
| 에이전트 | 77.0 | +1.8 | 실측 | [[gdpval]] 48.0%×1.0, [[tau2-bench]] 93.0%×1.0, [[tau3-banking]] 37.0%×1.0, [[terminal-bench]] 60.0%×1.0 |
| 신뢰성 | 39.0 | -0.74 | 실측 | [[aa-omniscience]] 11.0%×1.0 |
| 멀티모달 | 65.8 | +1.06 | 실측 | [[mmmu-pro]] 81.0%×1.0 |
| 긴문맥 | 70.3 | +1.35 | 실측 | [[aa-lcr]] 79.0%×1.0 |
| 지시 따르기 | 68.5 | +1.23 | 실측 | [[ifbench]] 72.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
