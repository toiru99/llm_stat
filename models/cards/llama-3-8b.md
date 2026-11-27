---
type: Model
title: Llama 3 8B
creator: Meta
license: Open
intelligence_index: None
price_blended_usd_1m: 0.07
output_speed_tps: 70.7013369531235
context_window: 8192
status: past
size_class: Small
params_b: 8
is_reasoning: false
radar:
  knowledge: { s: 15.4, z: -1.52, r: 27.1, estimated: false }  # 전문 지식
  reasoning: { s: 9.5, z: -1.28, r: 30.8, estimated: false }  # 추론
  coding: { s: 0.0, z: -1.38, r: 29.2, estimated: false }  # 코딩
  agentic: { s: 0.0, z: -1.66, r: 25.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.77, r: 23.5, estimated: false }  # 긴문맥
  instruction: { s: 17.5, z: -1.37, r: 29.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Llama 3 8B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# Llama 3 8B

Meta · Open · Small(8B) · 컨텍스트 8k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 지시 따르기
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $0.05 · 출력 $0.25 · 혼합 $0.07/1M · 70.7013369531235 t/s · TTFT 0.554410538416773s · 8k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 27.1 | -1.52 | 실측 | [[gpqa-diamond]] 29.596%×0.4, [[humanitys-last-exam]] 5.06%×0.3 |
| 추론 | 30.8 | -1.28 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 29.596%×1.0, [[humanitys-last-exam]] 5.06%×1.0 |
| 코딩 | 29.2 | -1.38 | 실측 | [[terminal-bench]] 0%×0.5 |
| 에이전트 | 25.1 | -1.66 | 실측 | [[tau2-bench]] 0%×1.0, [[terminal-bench]] 0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 23.5 | -1.77 | 실측 | [[aa-lcr]] 0%×1.0 |
| 지시 따르기 | 29.4 | -1.37 | 실측 | [[ifbench]] 24.5578%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
