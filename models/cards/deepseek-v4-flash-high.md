---
type: Model
title: DeepSeek V4 Flash (High)
creator: DeepSeek
license: Open
intelligence_index: 37.0
price_blended_usd_1m: 0.08
output_speed_tps: None
context_window: 1000000
radar:
  knowledge: { s: 65.0, z: 0.6, r: 58.9, estimated: false }  # 전문 지식
  reasoning: { s: 51.1, z: 0.27, r: 54.1, estimated: false }  # 추론
  coding: { s: 67.3, z: 0.3, r: 54.5, estimated: false }  # 코딩
  agentic: { s: 79.4, z: 1.12, r: 66.7, estimated: false }  # 에이전트
  trust: { s: 7.5, z: -0.95, r: 35.8, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 85.1, z: 0.51, r: 57.6, estimated: false }  # 긴문맥
  instruction: { s: 85.9, z: 0.74, r: 61.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Flash (High)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-01
timestamp: 2026-07-01T00:00:00Z
---

# DeepSeek V4 Flash (High)

DeepSeek · Open · 컨텍스트 1M · 종합지능 **37.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 지시 따르기
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $0.14 · 출력 $0.28 · 혼합 $0.08/1M · None t/s · TTFT Nones · 1M ctx` · 가성비 462.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 58.9 | +0.6 | 실측 | [[aa-omniscience]] 36.0%×1.0, [[gpqa-diamond]] 87.0%×0.4, [[humanitys-last-exam]] 28.0%×0.3 |
| 추론 | 54.1 | +0.27 | 실측 | [[critpt]] 3.0%×1.0, [[gpqa-diamond]] 87.0%×1.0, [[humanitys-last-exam]] 28.0%×1.0 |
| 코딩 | 54.5 | +0.3 | 실측 | [[scicode]] 42.0%×1.0, [[terminal-bench]] 39.0%×0.5 |
| 에이전트 | 66.7 | +1.12 | 실측 | [[tau2-bench]] 96.0%×1.0, [[terminal-bench]] 39.0%×1.0 |
| 신뢰성 | 35.8 | -0.95 | 실측 | [[aa-omniscience]] 10.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 57.6 | +0.51 | 실측 | [[aa-lcr]] 63.0%×1.0 |
| 지시 따르기 | 61.1 | +0.74 | 실측 | [[ifbench]] 73.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
