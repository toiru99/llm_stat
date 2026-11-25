---
type: Model
title: Qwen3.5 35B A3B (non-reasoning)
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.425
output_speed_tps: 115.708315448182
context_window: 262144
status: past
size_class: Small
params_b: 36
is_reasoning: false
radar:
  knowledge: { s: 54.9, z: 0.4, r: 55.9, estimated: false }  # 전문 지식
  reasoning: { s: 34.0, z: -0.06, r: 49.1, estimated: false }  # 추론
  coding: { s: 16.1, z: -0.84, r: 37.4, estimated: false }  # 코딩
  agentic: { s: 39.3, z: -0.27, r: 45.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 72.9, z: 0.08, r: 51.2, estimated: false }  # 멀티모달
  long_context: { s: 71.1, z: 0.41, r: 56.1, estimated: false }  # 긴문맥
  instruction: { s: 45.5, z: -0.21, r: 46.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 35B A3B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Qwen3.5 35B A3B (non-reasoning)

Alibaba · Open · Small(36B) · 컨텍스트 262k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.25 · 출력 $2.0 · 혼합 $0.425/1M · 115.708315448182 t/s · TTFT 3.65768822297221s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 55.9 | +0.4 | 실측 | [[gpqa-diamond]] 81.9192%×0.4, [[humanitys-last-exam]] 13.4384%×0.3 |
| 추론 | 49.1 | -0.06 | 실측 | [[critpt]] 0.571429%×1.0, [[gpqa-diamond]] 81.9192%×1.0, [[humanitys-last-exam]] 13.4384%×1.0 |
| 코딩 | 37.4 | -0.84 | 실측 | [[terminal-bench]] 10.6061%×0.5 |
| 에이전트 | 45.9 | -0.27 | 실측 | [[gdpval]] 616.03 Elo×1.0, [[tau2-bench]] 86.2573%×1.0, [[tau3-banking]] 4.94845%×1.0, [[terminal-bench]] 10.6061%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 51.2 | +0.08 | 실측 | [[mmmu-pro]] 69.1908%×1.0 |
| 긴문맥 | 56.1 | +0.41 | 실측 | [[aa-lcr]] 63%×1.0 |
| 지시 따르기 | 46.9 | -0.21 | 실측 | [[ifbench]] 44.4898%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
