---
type: Model
title: Qwen3.7 Plus
creator: Alibaba
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.296
output_speed_tps: None
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 78.2, z: 1.26, r: 68.8, estimated: false }  # 전문 지식
  reasoning: { s: 75.7, z: 1.34, r: 70.1, estimated: false }  # 추론
  coding: { s: 67.1, z: 1.0, r: 65.0, estimated: false }  # 코딩
  agentic: { s: 48.4, z: 0.48, r: 57.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 87.8, z: 0.83, r: 62.4, estimated: false }  # 멀티모달
  long_context: { s: 82.0, z: 0.89, r: 63.3, estimated: false }  # 긴문맥
  instruction: { s: 93.0, z: 1.67, r: 75.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.7 Plus
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-07
timestamp: 2026-11-07T00:00:00Z
---

# Qwen3.7 Plus

Alibaba · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 멀티모달, 에이전트

## 실용 지표
`입력 $0.4 · 출력 $1.6 · 혼합 $0.296/1M · None t/s · TTFT Nones · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 68.8 | +1.26 | 실측 | [[gpqa-diamond]] 90.0%×0.4, [[humanitys-last-exam]] 36.0%×0.3 |
| 추론 | 70.1 | +1.34 | 실측 | [[gpqa-diamond]] 90.0%×1.0, [[humanitys-last-exam]] 36.0%×1.0 |
| 코딩 | 65.0 | +1.0 | 실측 | [[scicode]] 46.0%×1.0, [[terminal-bench]] 47.0%×0.5 |
| 에이전트 | 57.2 | +0.48 | 실측 | [[apex-agents]] 22.0%×1.0, [[gdpval]] 775.0%×1.0, [[tau3-banking]] 18.0%×1.0, [[terminal-bench]] 47.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 62.4 | +0.83 | 실측 | [[mmmu-pro]] 80.0%×1.0 |
| 긴문맥 | 63.3 | +0.89 | 실측 | [[aa-lcr]] 73.0%×1.0 |
| 지시 따르기 | 75.1 | +1.67 | 실측 | [[ifbench]] 78.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
