---
type: Model
title: Qwen3 30B A3B 2507 (non-reasoning)
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.12
output_speed_tps: 58.6166283090465
context_window: 262144
status: past
size_class: Small
params_b: 30.5
is_reasoning: false
radar:
  knowledge: { s: 40.5, z: -0.31, r: 45.4, estimated: false }  # 전문 지식
  reasoning: { s: 24.3, z: -0.54, r: 41.9, estimated: false }  # 추론
  coding: { s: 9.2, z: -1.07, r: 33.9, estimated: false }  # 코딩
  agentic: { s: 9.8, z: -1.32, r: 30.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 29.7, z: -0.86, r: 37.1, estimated: false }  # 긴문맥
  instruction: { s: 29.4, z: -0.87, r: 36.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 30B A3B 2507 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# Qwen3 30B A3B 2507 (non-reasoning)

Alibaba · Open · Small(30.5B) · 컨텍스트 262k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 코딩, 에이전트

## 실용 지표
`입력 $0.1 · 출력 $0.3 · 혼합 $0.12/1M · 58.6166283090465 t/s · TTFT 2.19965958262781s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 45.4 | -0.31 | 실측 | [[gpqa-diamond]] 65.8586%×0.4, [[humanitys-last-exam]] 6.90454%×0.3 |
| 추론 | 41.9 | -0.54 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 65.8586%×1.0, [[humanitys-last-exam]] 6.90454%×1.0 |
| 코딩 | 33.9 | -1.07 | 실측 | [[terminal-bench]] 6.06061%×0.5 |
| 에이전트 | 30.3 | -1.32 | 실측 | [[tau2-bench]] 10.2339%×1.0, [[terminal-bench]] 6.06061%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 37.1 | -0.86 | 실측 | [[aa-lcr]] 26.3333%×1.0 |
| 지시 따르기 | 36.9 | -0.87 | 실측 | [[ifbench]] 33.0612%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
