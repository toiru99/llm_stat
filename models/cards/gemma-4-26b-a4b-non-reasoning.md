---
type: Model
title: Gemma 4 26B A4B (non-reasoning)
creator: Google
license: Open
intelligence_index: None
price_blended_usd_1m: 0.105
output_speed_tps: 116.0
context_window: 256000
status: current
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 47.7, z: -0.08, r: 48.8, estimated: false }  # 전문 지식
  reasoning: { s: 43.8, z: -0.09, r: 48.6, estimated: false }  # 추론
  coding: { s: 37.9, z: 0.02, r: 50.4, estimated: false }  # 코딩
  agentic: { s: 37.9, z: 0.13, r: 51.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 71.2, z: -0.04, r: 49.4, estimated: false }  # 멀티모달
  long_context: { s: 47.2, z: -0.15, r: 47.7, estimated: false }  # 긴문맥
  instruction: { s: 46.5, z: -0.26, r: 46.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemma 4 26B A4B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-29
timestamp: 2026-10-29T00:00:00Z
---

# Gemma 4 26B A4B (non-reasoning)

Google · Open · Small · 컨텍스트 256k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $0.12 · 출력 $0.4 · 혼합 $0.105/1M · 116.0 t/s · TTFT 0.94s · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 48.8 | -0.08 | 실측 | [[gpqa-diamond]] 71.0%×0.4, [[humanitys-last-exam]] 11.0%×0.3 |
| 추론 | 48.6 | -0.09 | 실측 | [[gpqa-diamond]] 71.0%×1.0, [[humanitys-last-exam]] 11.0%×1.0 |
| 코딩 | 50.4 | +0.02 | 실측 | [[terminal-bench]] 25.0%×0.5 |
| 에이전트 | 51.9 | +0.13 | 실측 | [[terminal-bench]] 25.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 49.4 | -0.04 | 실측 | [[mmmu-pro]] 67.0%×1.0 |
| 긴문맥 | 47.7 | -0.15 | 실측 | [[aa-lcr]] 42.0%×1.0 |
| 지시 따르기 | 46.1 | -0.26 | 실측 | [[ifbench]] 45.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
