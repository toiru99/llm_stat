---
type: Model
title: Qwen3 VL 235B A22B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.294
output_speed_tps: 46.0
context_window: 262000
status: past
size_class: Large
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 44.8, z: -0.2, r: 47.0, estimated: false }  # 전문 지식
  reasoning: { s: 40.5, z: -0.24, r: 46.4, estimated: false }  # 추론
  coding: { s: 10.6, z: -0.89, r: 36.7, estimated: false }  # 코딩
  agentic: { s: 10.6, z: -0.81, r: 37.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 72.6, z: 0.03, r: 50.4, estimated: false }  # 멀티모달
  long_context: { s: 37.1, z: -0.45, r: 43.2, estimated: false }  # 긴문맥
  instruction: { s: 43.7, z: -0.38, r: 44.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 VL 235B A22B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-28
timestamp: 2026-10-28T00:00:00Z
---

# Qwen3 VL 235B A22B

Alibaba · Open · Large · 컨텍스트 262k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 멀티모달, 전문 지식
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.21 · 출력 $1.39 · 혼합 $0.294/1M · 46.0 t/s · TTFT 0.99s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 47.0 | -0.2 | 실측 | [[gpqa-diamond]] 71.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 46.4 | -0.24 | 실측 | [[gpqa-diamond]] 71.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 36.7 | -0.89 | 실측 | [[terminal-bench]] 7.0%×0.5 |
| 에이전트 | 37.9 | -0.81 | 실측 | [[terminal-bench]] 7.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 50.4 | +0.03 | 실측 | [[mmmu-pro]] 68.0%×1.0 |
| 긴문맥 | 43.2 | -0.45 | 실측 | [[aa-lcr]] 33.0%×1.0 |
| 지시 따르기 | 44.3 | -0.38 | 실측 | [[ifbench]] 43.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
