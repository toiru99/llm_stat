---
type: Model
title: DeepSeek V4 Pro
creator: DeepSeek
license: Open
intelligence_index: 31.0
price_blended_usd_1m: 0.18
output_speed_tps: 74.0
context_window: 1000000
radar:
  knowledge: { s: 49.1, z: -0.14, r: 47.9, estimated: false }  # 전문 지식
  reasoning: { s: 30.1, z: -0.73, r: 39.0, estimated: false }  # 추론
  coding: { s: 65.7, z: 0.23, r: 53.4, estimated: false }  # 코딩
  agentic: { s: 74.5, z: 0.92, r: 63.8, estimated: false }  # 에이전트
  trust: { s: 10.0, z: -0.86, r: 37.0, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 60.8, z: -0.37, r: 44.4, estimated: false }  # 긴문맥
  instruction: { s: 47.9, z: -0.89, r: 36.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Pro
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-01
timestamp: 2026-07-01T00:00:00Z
---

# DeepSeek V4 Pro

DeepSeek · Open · 컨텍스트 1M · 종합지능 **31.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 신뢰성, 지시 따르기

## 실용 지표
`입력 $0.43 · 출력 $0.87 · 혼합 $0.18/1M · 74.0 t/s · TTFT 1.7s · 1M ctx` · 가성비 172.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.9 | -0.14 | 실측 | [[aa-omniscience]] 31.0%×1.0, [[gpqa-diamond]] 72.0%×0.4, [[humanitys-last-exam]] 8.0%×0.3 |
| 추론 | 39.0 | -0.73 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 72.0%×1.0, [[humanitys-last-exam]] 8.0%×1.0 |
| 코딩 | 53.4 | +0.23 | 실측 | [[scicode]] 42.0%×1.0, [[terminal-bench]] 36.0%×0.5 |
| 에이전트 | 63.8 | +0.92 | 실측 | [[tau2-bench]] 91.0%×1.0, [[terminal-bench]] 36.0%×1.0 |
| 신뢰성 | 37.0 | -0.86 | 실측 | [[aa-omniscience]] 12.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 44.4 | -0.37 | 실측 | [[aa-lcr]] 45.0%×1.0 |
| 지시 따르기 | 36.7 | -0.89 | 실측 | [[ifbench]] 46.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
