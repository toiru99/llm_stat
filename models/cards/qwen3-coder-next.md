---
type: Model
title: Qwen3 Coder Next
creator: Alibaba
license: Open
intelligence_index: 21.0
price_blended_usd_1m: 0.43
output_speed_tps: 109.0
context_window: 256000
radar:
  knowledge: { s: 35.3, z: -0.77, r: 38.4, estimated: false }  # 전문 지식
  reasoning: { s: 30.4, z: -0.72, r: 39.3, estimated: false }  # 추론
  coding: { s: 45.1, z: -0.69, r: 39.7, estimated: false }  # 코딩
  agentic: { s: 54.7, z: 0.14, r: 52.1, estimated: false }  # 에이전트
  trust: { s: 6.2, z: -0.99, r: 35.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 54.1, z: -0.62, r: 40.7, estimated: false }  # 긴문맥
  instruction: { s: 32.4, z: -1.55, r: 26.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 Coder Next
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-01
timestamp: 2026-07-01T00:00:00Z
---

# Qwen3 Coder Next

Alibaba · Open · 컨텍스트 256k · 종합지능 **21.0**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 신뢰성, 지시 따르기

## 실용 지표
`입력 $0.35 · 출력 $1.2 · 혼합 $0.43/1M · 109.0 t/s · TTFT 1.83s · 256k ctx` · 가성비 48.8

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 38.4 | -0.77 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 74.0%×0.4, [[humanitys-last-exam]] 9.0%×0.3 |
| 추론 | 39.3 | -0.72 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 74.0%×1.0, [[humanitys-last-exam]] 9.0%×1.0 |
| 코딩 | 39.7 | -0.69 | 실측 | [[scicode]] 32.0%×1.0, [[terminal-bench]] 18.0%×0.5 |
| 에이전트 | 52.1 | +0.14 | 실측 | [[tau2-bench]] 80.0%×1.0, [[terminal-bench]] 18.0%×1.0 |
| 신뢰성 | 35.1 | -0.99 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 40.7 | -0.62 | 실측 | [[aa-lcr]] 40.0%×1.0 |
| 지시 따르기 | 26.7 | -1.55 | 실측 | [[ifbench]] 35.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
