---
type: Model
title: Qwen3.5 Omni Plus
creator: Alibaba
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.84
output_speed_tps: None
context_window: 256000
status: current
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 56.2, z: 0.45, r: 56.7, estimated: false }  # 전문 지식
  reasoning: { s: 51.5, z: 0.41, r: 56.1, estimated: false }  # 추론
  coding: { s: 32.2, z: -0.18, r: 47.2, estimated: false }  # 코딩
  agentic: { s: 32.2, z: -0.09, r: 48.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 75.7, z: 0.21, r: 53.2, estimated: false }  # 멀티모달
  long_context: { s: 71.8, z: 0.56, r: 58.4, estimated: false }  # 긴문맥
  instruction: { s: 54.9, z: 0.09, r: 51.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 Omni Plus
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-11
timestamp: 2026-11-11T00:00:00Z
---

# Qwen3.5 Omni Plus

Alibaba · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.4 · 출력 $4.8 · 혼합 $0.84/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 56.7 | +0.45 | 실측 | [[gpqa-diamond]] 82.6%×0.4, [[humanitys-last-exam]] 14.9%×0.3 |
| 추론 | 56.1 | +0.41 | 실측 | [[gpqa-diamond]] 82.6%×1.0, [[humanitys-last-exam]] 14.9%×1.0 |
| 코딩 | 47.2 | -0.18 | 실측 | [[terminal-bench]] 21.2%×0.5 |
| 에이전트 | 48.7 | -0.09 | 실측 | [[terminal-bench]] 21.2%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 53.2 | +0.21 | 실측 | [[mmmu-pro]] 71.0%×1.0 |
| 긴문맥 | 58.4 | +0.56 | 실측 | [[aa-lcr]] 63.7%×1.0 |
| 지시 따르기 | 51.4 | +0.09 | 실측 | [[ifbench]] 51.2%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
