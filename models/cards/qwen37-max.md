---
type: Model
title: Qwen3.7 Max
creator: Alibaba
license: Proprietary
intelligence_index: 46.0
price_blended_usd_1m: 1.43
output_speed_tps: 197.0
context_window: 1000000
radar:
  knowledge: { s: 64.0, z: 0.55, r: 58.2, estimated: false }  # 전문 지식
  reasoning: { s: 70.2, z: 1.19, r: 67.8, estimated: false }  # 추론
  coding: { s: 81.4, z: 0.92, r: 63.9, estimated: false }  # 코딩
  agentic: { s: 69.6, z: 0.73, r: 60.9, estimated: false }  # 에이전트
  trust: { s: 91.2, z: 1.89, r: 78.3, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 93.2, z: 0.8, r: 62.0, estimated: false }  # 긴문맥
  instruction: { s: 97.2, z: 1.23, r: 68.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.7 Max
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-01
timestamp: 2026-07-01T00:00:00Z
---

# Qwen3.7 Max

Alibaba · Proprietary · 컨텍스트 1M · 종합지능 **46.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 에이전트, 전문 지식

## 실용 지표
`입력 $2.5 · 출력 $7.5 · 혼합 $1.43/1M · 197.0 t/s · TTFT 2.52s · 1M ctx` · 가성비 32.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 58.2 | +0.55 | 실측 | [[aa-omniscience]] 30.0%×1.0, [[gpqa-diamond]] 92.0%×0.4, [[humanitys-last-exam]] 38.0%×0.3 |
| 추론 | 67.8 | +1.19 | 실측 | [[critpt]] 13.0%×1.0, [[gpqa-diamond]] 92.0%×1.0, [[humanitys-last-exam]] 38.0%×1.0 |
| 코딩 | 63.9 | +0.92 | 실측 | [[scicode]] 49.0%×1.0, [[terminal-bench]] 51.0%×0.5 |
| 에이전트 | 60.9 | +0.73 | 실측 | [[gdpval]] 39.0%×1.0, [[itbench]] 42.0%×1.0, [[tau2-bench]] 95.0%×1.0, [[tau3-banking]] 11.0%×1.0, [[terminal-bench]] 51.0%×1.0 |
| 신뢰성 | 78.3 | +1.89 | 실측 | [[aa-omniscience]] 77.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 62.0 | +0.8 | 실측 | [[aa-lcr]] 69.0%×1.0 |
| 지시 따르기 | 68.4 | +1.23 | 실측 | [[ifbench]] 81.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
