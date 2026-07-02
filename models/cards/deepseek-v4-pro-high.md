---
type: Model
title: DeepSeek V4 Pro (high)
creator: DeepSeek
license: Open
intelligence_index: 41.0
price_blended_usd_1m: 0.18
output_speed_tps: 68.0
context_window: 1000000
radar:
  knowledge: { s: 74.1, z: 1.01, r: 65.2, estimated: false }  # 전문 지식
  reasoning: { s: 64.0, z: 0.89, r: 63.4, estimated: false }  # 추론
  coding: { s: 73.3, z: 0.57, r: 58.5, estimated: false }  # 코딩
  agentic: { s: 80.8, z: 1.17, r: 67.5, estimated: false }  # 에이전트
  trust: { s: 8.8, z: -0.91, r: 36.4, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 87.8, z: 0.6, r: 59.1, estimated: false }  # 긴문맥
  instruction: { s: 83.1, z: 0.62, r: 59.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Pro (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-02
timestamp: 2026-07-02T00:00:00Z
---

# DeepSeek V4 Pro (high)

DeepSeek · Open · 컨텍스트 1M · 종합지능 **41.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 전문 지식
- **약점**: 코딩, 신뢰성

## 실용 지표
`입력 $0.43 · 출력 $0.87 · 혼합 $0.18/1M · 68.0 t/s · TTFT 1.76s · 1M ctx` · 가성비 227.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 65.2 | +1.01 | 실측 | [[aa-omniscience]] 42.0%×1.0, [[gpqa-diamond]] 91.0%×0.4, [[humanitys-last-exam]] 34.0%×0.3 |
| 추론 | 63.4 | +0.89 | 실측 | [[critpt]] 10.0%×1.0, [[gpqa-diamond]] 91.0%×1.0, [[humanitys-last-exam]] 34.0%×1.0 |
| 코딩 | 58.5 | +0.57 | 실측 | [[scicode]] 46.0%×1.0, [[terminal-bench]] 42.0%×0.5 |
| 에이전트 | 67.5 | +1.17 | 실측 | [[tau2-bench]] 94.0%×1.0, [[terminal-bench]] 42.0%×1.0 |
| 신뢰성 | 36.4 | -0.91 | 실측 | [[aa-omniscience]] 11.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 59.1 | +0.6 | 실측 | [[aa-lcr]] 65.0%×1.0 |
| 지시 따르기 | 59.3 | +0.62 | 실측 | [[ifbench]] 71.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
