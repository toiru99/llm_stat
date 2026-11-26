---
type: Model
title: Qwen3 8B (non-reasoning)
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.2
output_speed_tps: None
context_window: 131072
status: past
size_class: Small
params_b: 8.2
is_reasoning: false
radar:
  knowledge: { s: 23.9, z: -1.11, r: 33.3, estimated: false }  # 전문 지식
  reasoning: { s: 14.0, z: -1.05, r: 34.3, estimated: false }  # 추론
  coding: { s: 3.4, z: -1.27, r: 31.0, estimated: false }  # 코딩
  agentic: { s: 14.3, z: -1.16, r: 32.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.77, r: 23.5, estimated: false }  # 긴문맥
  instruction: { s: 23.1, z: -1.14, r: 33.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 8B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# Qwen3 8B (non-reasoning)

Alibaba · Open · Small(8.2B) · 컨텍스트 131k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $0.2 · 출력 $0.2 · 혼합 $0.2/1M · None t/s · TTFT Nones · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 33.3 | -1.11 | 실측 | [[gpqa-diamond]] 45.1515%×0.4, [[humanitys-last-exam]] 1.95%×0.3 |
| 추론 | 34.3 | -1.05 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 45.1515%×1.0, [[humanitys-last-exam]] 1.95%×1.0 |
| 코딩 | 31.0 | -1.27 | 실측 | [[terminal-bench]] 2.27273%×0.5 |
| 에이전트 | 32.6 | -1.16 | 실측 | [[tau2-bench]] 24.8538%×1.0, [[terminal-bench]] 2.27273%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 23.5 | -1.77 | 실측 | [[aa-lcr]] 0%×1.0 |
| 지시 따르기 | 33.0 | -1.14 | 실측 | [[ifbench]] 28.5714%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
