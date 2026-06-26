---
type: Model
title: GPT-5.5 (Non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: 35.0
price_blended_usd_1m: 4.35
output_speed_tps: 67.0
context_window: 922000
radar:
  knowledge: { s: 65.9, z: 0.65, r: 59.8, estimated: false }  # 전문 지식
  reasoning: { s: 35.3, z: -0.44, r: 43.5, estimated: false }  # 추론
  coding: { s: 78.1, z: 0.81, r: 62.1, estimated: false }  # 코딩
  agentic: { s: 57.2, z: 0.22, r: 53.2, estimated: false }  # 에이전트
  trust: { s: 6.2, z: -0.97, r: 35.5, estimated: false }  # 신뢰성
  multimodal: { s: 77.6, z: 0.12, r: 51.9, estimated: false }  # 멀티모달
  long_context: { s: 75.7, z: 0.18, r: 52.7, estimated: false }  # 긴문맥
  instruction: { s: 47.9, z: -0.8, r: 38.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.5 (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-06-26
timestamp: 2026-06-26T00:00:00Z
---

# GPT-5.5 (Non-reasoning)

OpenAI · Proprietary · 컨텍스트 922k · 종합지능 **35.0**

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 전문 지식
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · 67.0 t/s · TTFT 0.92s · 922k ctx` · 가성비 8.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 59.8 | +0.65 | 실측 | [[aa-omniscience]] 45.0%×1.0, [[gpqa-diamond]] 77.0%×0.4, [[humanitys-last-exam]] 13.0%×0.3 |
| 추론 | 43.5 | -0.44 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 77.0%×1.0, [[humanitys-last-exam]] 13.0%×1.0 |
| 코딩 | 62.1 | +0.81 | 실측 | [[scicode]] 47.0%×1.0, [[terminal-bench]] 49.0%×0.5 |
| 에이전트 | 53.2 | +0.22 | 실측 | [[gdpval]] 31.0%×1.0, [[tau2-bench]] 69.0%×1.0, [[tau3-banking]] 14.0%×1.0, [[terminal-bench]] 49.0%×1.0 |
| 신뢰성 | 35.5 | -0.97 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | 51.9 | +0.12 | 실측 | [[mmmu-pro]] 71.0%×1.0 |
| 긴문맥 | 52.7 | +0.18 | 실측 | [[aa-lcr]] 56.0%×1.0 |
| 지시 따르기 | 38.0 | -0.8 | 실측 | [[ifbench]] 46.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
