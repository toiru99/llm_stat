---
type: Model
title: GPT-5.5 (high)
creator: OpenAI
license: Proprietary
intelligence_index: 53.0
price_blended_usd_1m: 4.35
output_speed_tps: 68.0
context_window: 922000
radar:
  knowledge: { s: 91.4, z: 1.8, r: 77.0, estimated: false }  # 전문 지식
  reasoning: { s: 86.7, z: 1.99, r: 79.8, estimated: false }  # 추론
  coding: { s: 94.0, z: 1.49, r: 72.4, estimated: false }  # 코딩
  agentic: { s: 89.7, z: 1.49, r: 72.3, estimated: false }  # 에이전트
  trust: { s: 12.5, z: -0.75, r: 38.8, estimated: false }  # 신뢰성
  multimodal: { s: 94.8, z: 1.01, r: 65.1, estimated: false }  # 멀티모달
  long_context: { s: 98.6, z: 1.0, r: 65.0, estimated: false }  # 긴문맥
  instruction: { s: 84.5, z: 0.73, r: 61.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.5 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-06-25
timestamp: 2026-06-25T00:00:00Z
---

# GPT-5.5 (high)

OpenAI · Proprietary · 컨텍스트 922k · 종합지능 **53.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · 68.0 t/s · TTFT 19.33s · 922k ctx` · 가성비 12.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 77.0 | +1.8 | 실측 | [[aa-omniscience]] 56.0%×1.0, [[gpqa-diamond]] 93.0%×0.4, [[humanitys-last-exam]] 43.0%×0.3 |
| 추론 | 79.8 | +1.99 | 실측 | [[critpt]] 25.0%×1.0, [[gpqa-diamond]] 93.0%×1.0, [[humanitys-last-exam]] 43.0%×1.0 |
| 코딩 | 72.4 | +1.49 | 실측 | [[scicode]] 56.0%×1.0, [[terminal-bench]] 60.0%×0.5 |
| 에이전트 | 72.3 | +1.49 | 실측 | [[gdpval]] 49.0%×1.0, [[tau2-bench]] 93.0%×1.0, [[tau3-banking]] 29.0%×1.0, [[terminal-bench]] 60.0%×1.0 |
| 신뢰성 | 38.8 | -0.75 | 실측 | [[aa-omniscience]] 14.0%×1.0 |
| 멀티모달 | 65.1 | +1.01 | 실측 | [[mmmu-pro]] 81.0%×1.0 |
| 긴문맥 | 65.0 | +1.0 | 실측 | [[aa-lcr]] 73.0%×1.0 |
| 지시 따르기 | 61.0 | +0.73 | 실측 | [[ifbench]] 72.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
