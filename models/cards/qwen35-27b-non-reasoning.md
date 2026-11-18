---
type: Model
title: Qwen3.5 27B (non-reasoning)
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.51
output_speed_tps: 32.13792170868653
context_window: 262144
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 56.7, z: 0.45, r: 56.8, estimated: false }  # 전문 지식
  reasoning: { s: 34.8, z: -0.04, r: 49.4, estimated: false }  # 추론
  coding: { s: 48.3, z: 0.28, r: 54.2, estimated: false }  # 코딩
  agentic: { s: 68.1, z: 0.8, r: 62.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 74.0, z: 0.13, r: 52.0, estimated: false }  # 멀티모달
  long_context: { s: 72.2, z: 0.55, r: 58.3, estimated: false }  # 긴문맥
  instruction: { s: 48.9, z: -0.21, r: 46.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.5 27B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# Qwen3.5 27B (non-reasoning)

Alibaba · Open · Small · 컨텍스트 262k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 긴문맥
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $0.3 · 출력 $2.4 · 혼합 $0.51/1M · 32.13792170868653 t/s · TTFT 11.9937851171472s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 56.8 | +0.45 | 실측 | [[gpqa-diamond]] 84.24242424242419%×0.4, [[humanitys-last-exam]] 13.9481000926784%×0.3 |
| 추론 | 49.4 | -0.04 | 실측 | [[critpt]] 0.28571428571428603%×1.0, [[gpqa-diamond]] 84.24242424242419%×1.0, [[humanitys-last-exam]] 13.9481000926784%×1.0 |
| 코딩 | 54.2 | +0.28 | 실측 | [[terminal-bench]] 31.818181818181802%×0.5 |
| 에이전트 | 62.0 | +0.8 | 실측 | [[tau2-bench]] 87.1345029239766%×1.0, [[terminal-bench]] 31.818181818181802%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 52.0 | +0.13 | 실측 | [[mmmu-pro]] 70.0%×1.0 |
| 긴문맥 | 58.3 | +0.55 | 실측 | [[aa-lcr]] 64.0%×1.0 |
| 지시 따르기 | 46.9 | -0.21 | 실측 | [[ifbench]] 46.9387755102041%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
