---
type: Model
title: GPT-5.5 (low)
creator: OpenAI
license: Proprietary
intelligence_index: 43.0
price_blended_usd_1m: 4.35
output_speed_tps: 71.0
context_window: 922000
radar:
  knowledge: { s: 84.8, z: 1.51, r: 72.6, estimated: false }  # 전문 지식
  reasoning: { s: 60.0, z: 0.7, r: 60.5, estimated: false }  # 추론
  coding: { s: 85.3, z: 1.1, r: 66.4, estimated: false }  # 코딩
  agentic: { s: 70.3, z: 0.76, r: 61.3, estimated: false }  # 에이전트
  trust: { s: 12.5, z: -0.78, r: 38.3, estimated: false }  # 신뢰성
  multimodal: { s: 91.4, z: 0.8, r: 62.1, estimated: false }  # 멀티모달
  long_context: { s: 97.3, z: 0.95, r: 64.2, estimated: false }  # 긴문맥
  instruction: { s: 73.2, z: 0.2, r: 53.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.5 (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-02
timestamp: 2026-07-02T00:00:00Z
---

# GPT-5.5 (low)

OpenAI · Proprietary · 컨텍스트 922k · 종합지능 **43.0**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $5.0 · 출력 $30.0 · 혼합 $4.35/1M · 71.0 t/s · TTFT 1.82s · 922k ctx` · 가성비 9.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 72.6 | +1.51 | 실측 | [[aa-omniscience]] 54.0%×1.0, [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 31.0%×0.3 |
| 추론 | 60.5 | +0.7 | 실측 | [[critpt]] 8.0%×1.0, [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 31.0%×1.0 |
| 코딩 | 66.4 | +1.1 | 실측 | [[scicode]] 52.0%×1.0, [[terminal-bench]] 52.0%×0.5 |
| 에이전트 | 61.3 | +0.76 | 실측 | [[gdpval]] 34.0%×1.0, [[tau2-bench]] 84.0%×1.0, [[tau3-banking]] 21.0%×1.0, [[terminal-bench]] 52.0%×1.0 |
| 신뢰성 | 38.3 | -0.78 | 실측 | [[aa-omniscience]] 14.0%×1.0 |
| 멀티모달 | 62.1 | +0.8 | 실측 | [[mmmu-pro]] 79.0%×1.0 |
| 긴문맥 | 64.2 | +0.95 | 실측 | [[aa-lcr]] 72.0%×1.0 |
| 지시 따르기 | 53.0 | +0.2 | 실측 | [[ifbench]] 64.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
