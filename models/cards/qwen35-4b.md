---
type: Model
title: Qwen3.5 4B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.042
output_speed_tps: 20.0
context_window: 262000
status: current
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 50.9, z: 0.07, r: 51.0, estimated: false }  # 전문 지식
  reasoning: { s: 46.5, z: 0.03, r: 50.5, estimated: false }  # 추론
  coding: { s: 27.3, z: -0.33, r: 45.1, estimated: false }  # 코딩
  agentic: { s: 20.5, z: -0.47, r: 43.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 68.5, z: -0.18, r: 47.3, estimated: false }  # 멀티모달
  long_context: { s: 70.8, z: 0.56, r: 58.3, estimated: false }  # 긴문맥
  instruction: { s: 56.3, z: 0.15, r: 52.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 4B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-28
timestamp: 2026-10-28T00:00:00Z
---

# Qwen3.5 4B

Alibaba · Open · Unknown · 컨텍스트 262k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $0.03 · 출력 $0.15 · 혼합 $0.042/1M · 20.0 t/s · TTFT 0.91s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 51.0 | +0.07 | 실측 | [[gpqa-diamond]] 77.0%×0.4, [[humanitys-last-exam]] 10.0%×0.3 |
| 추론 | 50.5 | +0.03 | 실측 | [[gpqa-diamond]] 77.0%×1.0, [[humanitys-last-exam]] 10.0%×1.0 |
| 코딩 | 45.1 | -0.33 | 실측 | [[terminal-bench]] 18.0%×0.5 |
| 에이전트 | 43.0 | -0.47 | 실측 | [[tau3-banking]] 7.0%×1.0, [[terminal-bench]] 18.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 47.3 | -0.18 | 실측 | [[mmmu-pro]] 65.0%×1.0 |
| 긴문맥 | 58.3 | +0.56 | 실측 | [[aa-lcr]] 63.0%×1.0 |
| 지시 따르기 | 52.2 | +0.15 | 실측 | [[ifbench]] 52.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
