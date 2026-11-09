---
type: Model
title: Qwen3.5 27B (non-reasoning)
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.51
output_speed_tps: None
context_window: 262000
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 58.2, z: 0.39, r: 55.9, estimated: false }  # 전문 지식
  reasoning: { s: 53.6, z: 0.37, r: 55.5, estimated: false }  # 추론
  coding: { s: 48.3, z: 0.36, r: 55.4, estimated: false }  # 코딩
  agentic: { s: 48.3, z: 0.47, r: 57.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 74.3, z: 0.14, r: 52.2, estimated: false }  # 멀티모달
  long_context: { s: 72.2, z: 0.58, r: 58.7, estimated: false }  # 긴문맥
  instruction: { s: 48.9, z: -0.17, r: 47.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 27B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-09
timestamp: 2026-11-09T00:00:00Z
---

# Qwen3.5 27B (non-reasoning)

Alibaba · Open · Small · 컨텍스트 262k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 에이전트
- **약점**: 멀티모달, 지시 따르기

## 실용 지표
`입력 $0.3 · 출력 $2.4 · 혼합 $0.51/1M · None t/s · TTFT Nones · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 55.9 | +0.39 | 실측 | [[gpqa-diamond]] 84.2%×0.4, [[humanitys-last-exam]] 13.9%×0.3 |
| 추론 | 55.5 | +0.37 | 실측 | [[gpqa-diamond]] 84.2%×1.0, [[humanitys-last-exam]] 13.9%×1.0 |
| 코딩 | 55.4 | +0.36 | 실측 | [[terminal-bench]] 31.8%×0.5 |
| 에이전트 | 57.1 | +0.47 | 실측 | [[terminal-bench]] 31.8%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 52.2 | +0.14 | 실측 | [[mmmu-pro]] 70.0%×1.0 |
| 긴문맥 | 58.7 | +0.58 | 실측 | [[aa-lcr]] 64.0%×1.0 |
| 지시 따르기 | 47.4 | -0.17 | 실측 | [[ifbench]] 46.9%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
