---
type: Model
title: Qwen3.6 27B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.9
output_speed_tps: 58.6608239295783
context_window: 262144
status: past
size_class: Small
params_b: 27.8
is_reasoning: true
radar:
  knowledge: { s: 62.1, z: 0.74, r: 61.2, estimated: false }  # 전문 지식
  reasoning: { s: 39.8, z: 0.23, r: 53.5, estimated: false }  # 추론
  coding: { s: 57.0, z: 0.54, r: 58.1, estimated: false }  # 코딩
  agentic: { s: 60.4, z: 0.47, r: 57.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 80.2, z: 0.45, r: 56.7, estimated: false }  # 멀티모달
  long_context: { s: 87.2, z: 0.9, r: 63.5, estimated: false }  # 긴문맥
  instruction: { s: 77.8, z: 1.14, r: 67.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.6 27B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Qwen3.6 27B

Alibaba · Open · Small(27.8B) · 컨텍스트 262k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $0.6 · 출력 $3.6 · 혼합 $0.9/1M · 58.6608239295783 t/s · TTFT 7.14182209727224s · 262k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 61.2 | +0.74 | 실측 | [[gpqa-diamond]] 84.2424%×0.4, [[humanitys-last-exam]] 23.0769%×0.3 |
| 추론 | 53.5 | +0.23 | 실측 | [[critpt]] 1.14286%×1.0, [[gpqa-diamond]] 84.2424%×1.0, [[humanitys-last-exam]] 23.0769%×1.0 |
| 코딩 | 58.1 | +0.54 | 실측 | [[scicode]] 42.8241%×1.0, [[terminal-bench]] 34.8485%×0.5 |
| 에이전트 | 57.0 | +0.47 | 실측 | [[gdpval]] 992.52 Elo×1.0, [[tau2-bench]] 94.152%×1.0, [[tau3-banking]] 16.701%×1.0, [[terminal-bench]] 34.8485%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 56.7 | +0.45 | 실측 | [[mmmu-pro]] 74.6243%×1.0 |
| 긴문맥 | 63.5 | +0.9 | 실측 | [[aa-lcr]] 77.3333%×1.0 |
| 지시 따르기 | 67.1 | +1.14 | 실측 | [[ifbench]] 67.551%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
