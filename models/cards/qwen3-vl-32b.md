---
type: Model
title: Qwen3 VL 32B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: past
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 41.2, z: -0.28, r: 45.8, estimated: false }  # 전문 지식
  reasoning: { s: 37.0, z: -0.3, r: 45.5, estimated: false }  # 추론
  coding: { s: 12.6, z: -0.84, r: 37.4, estimated: false }  # 코딩
  agentic: { s: 12.6, z: -0.75, r: 38.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 66.2, z: -0.26, r: 46.0, estimated: false }  # 멀티모달
  long_context: { s: 48.5, z: -0.14, r: 48.0, estimated: true }  # 긴문맥
  instruction: { s: 38.1, z: -0.63, r: 40.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 VL 32B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-11
timestamp: 2026-11-11T00:00:00Z
---

# Qwen3 VL 32B

Alibaba · Open · Small · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 멀티모달
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.8 | -0.28 | 실측 | [[gpqa-diamond]] 67.1%×0.4, [[humanitys-last-exam]] 6.8%×0.3 |
| 추론 | 45.5 | -0.3 | 실측 | [[gpqa-diamond]] 67.1%×1.0, [[humanitys-last-exam]] 6.8%×1.0 |
| 코딩 | 37.4 | -0.84 | 실측 | [[terminal-bench]] 8.3%×0.5 |
| 에이전트 | 38.7 | -0.75 | 실측 | [[terminal-bench]] 8.3%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 46.0 | -0.26 | 실측 | [[mmmu-pro]] 64.0%×1.0 |
| 긴문맥 | 48.0 | -0.14 | 추정 | (추정) |
| 지시 따르기 | 40.5 | -0.63 | 실측 | [[ifbench]] 39.2%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
