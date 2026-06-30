---
type: Model
title: DeepSeek V4 Flash (Max)
creator: DeepSeek
license: Open
intelligence_index: 40.0
price_blended_usd_1m: 0.06
output_speed_tps: 110.0
context_window: 1000000
radar:
  knowledge: { s: 67.9, z: 0.76, r: 61.3, estimated: false }  # 전문 지식
  reasoning: { s: 58.7, z: 0.68, r: 60.2, estimated: false }  # 추론
  coding: { s: 69.0, z: 0.42, r: 56.3, estimated: false }  # 코딩
  agentic: { s: 68.5, z: 0.69, r: 60.3, estimated: false }  # 에이전트
  trust: { s: 0.0, z: -1.17, r: 32.4, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 85.1, z: 0.53, r: 57.9, estimated: false }  # 긴문맥
  instruction: { s: 94.4, z: 1.15, r: 67.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Flash (Max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-06-30
timestamp: 2026-06-30T00:00:00Z
---

# DeepSeek V4 Flash (Max)

DeepSeek · Open · 컨텍스트 1M · 종합지능 **40.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 코딩, 신뢰성

## 실용 지표
`입력 $0.14 · 출력 $0.28 · 혼합 $0.06/1M · 110.0 t/s · TTFT 1.42s · 1M ctx` · 가성비 666.7

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 61.3 | +0.76 | 실측 | [[aa-omniscience]] 37.0%×1.0, [[gpqa-diamond]] 89.0%×0.4, [[humanitys-last-exam]] 32.0%×0.3 |
| 추론 | 60.2 | +0.68 | 실측 | [[critpt]] 7.0%×1.0, [[gpqa-diamond]] 89.0%×1.0, [[humanitys-last-exam]] 32.0%×1.0 |
| 코딩 | 56.3 | +0.42 | 실측 | [[scicode]] 45.0%×1.0, [[terminal-bench]] 36.0%×0.5 |
| 에이전트 | 60.3 | +0.69 | 실측 | [[gdpval]] 34.0%×1.0, [[itbench]] 32.0%×1.0, [[tau2-bench]] 95.0%×1.0, [[tau3-banking]] 23.0%×1.0, [[terminal-bench]] 36.0%×1.0 |
| 신뢰성 | 32.4 | -1.17 | 실측 | [[aa-omniscience]] 4.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 57.9 | +0.53 | 실측 | [[aa-lcr]] 63.0%×1.0 |
| 지시 따르기 | 67.3 | +1.15 | 실측 | [[ifbench]] 79.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
