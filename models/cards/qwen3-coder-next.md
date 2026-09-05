---
type: Model
title: Qwen3 Coder Next
creator: Alibaba
license: Open
intelligence_index: 14.0
price_blended_usd_1m: 0.435
output_speed_tps: 105.0
context_window: 256000
status: current
size_class: Medium
params_b: 79.7
is_reasoning: false
radar:
  knowledge: { s: 34.3, z: -0.32, r: 45.2, estimated: false }  # 전문 지식
  reasoning: { s: 30.0, z: -0.24, r: 46.3, estimated: false }  # 추론
  coding: { s: 27.3, z: -0.17, r: 47.5, estimated: false }  # 코딩
  agentic: { s: 32.6, z: -0.19, r: 47.2, estimated: false }  # 에이전트
  trust: { s: 4.1, z: -0.96, r: 35.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 52.8, z: 0.11, r: 51.7, estimated: false }  # 긴문맥
  instruction: { s: 32.4, z: -0.84, r: 37.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 Coder Next
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Qwen3 Coder Next

Alibaba · Open · Medium(79.7B) · 컨텍스트 256k · 종합지능 **14.0**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 코딩
- **약점**: 지시 따르기, 신뢰성

## 실용 지표
`입력 $0.35 · 출력 $1.2 · 혼합 $0.435/1M · 105.0 t/s · TTFT 1.35s · 256k ctx` · 가성비 32.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.2 | -0.32 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 74.0%×0.4, [[humanitys-last-exam]] 10.0%×0.3 |
| 추론 | 46.3 | -0.24 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 74.0%×1.0, [[humanitys-last-exam]] 10.0%×1.0 |
| 코딩 | 47.5 | -0.17 | 실측 | [[terminal-bench]] 18.0%×0.5 |
| 에이전트 | 47.2 | -0.19 | 실측 | [[gdpval]] 8.0%×1.0, [[tau2-bench]] 80.0%×1.0, [[tau3-banking]] 5.0%×1.0, [[terminal-bench]] 18.0%×1.0 |
| 신뢰성 | 35.6 | -0.96 | 실측 | [[aa-omniscience]] 6.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 51.7 | +0.11 | 실측 | [[aa-lcr]] 47.0%×1.0 |
| 지시 따르기 | 37.3 | -0.84 | 실측 | [[ifbench]] 35.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
