---
type: Model
title: GLM-5 (non-reasoning)
creator: Z AI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.66
output_speed_tps: 58.0841191936067
context_window: 200000
status: past
size_class: Large
params_b: 744
is_reasoning: false
radar:
  knowledge: { s: 41.4, z: -0.26, r: 46.1, estimated: false }  # 전문 지식
  reasoning: { s: 24.9, z: -0.51, r: 42.3, estimated: false }  # 추론
  coding: { s: 59.8, z: 0.63, r: 59.5, estimated: false }  # 코딩
  agentic: { s: 79.0, z: 1.12, r: 66.9, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 49.2, z: -0.26, r: 46.1, estimated: false }  # 긴문맥
  instruction: { s: 60.5, z: 0.42, r: 56.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-5 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# GLM-5 (non-reasoning)

Z AI · Open · Large(744B) · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 긴문맥, 추론

## 실용 지표
`입력 $1.0 · 출력 $3.2 · 혼합 $0.66/1M · 58.0841191936067 t/s · TTFT 2.66402360180004s · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 46.1 | -0.26 | 실측 | [[gpqa-diamond]] 66.5657%×0.4, [[humanitys-last-exam]] 7.64597%×0.3 |
| 추론 | 42.3 | -0.51 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 66.5657%×1.0, [[humanitys-last-exam]] 7.64597%×1.0 |
| 코딩 | 59.5 | +0.63 | 실측 | [[terminal-bench]] 39.3939%×0.5 |
| 에이전트 | 66.9 | +1.12 | 실측 | [[tau2-bench]] 97.3684%×1.0, [[terminal-bench]] 39.3939%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 46.1 | -0.26 | 실측 | [[aa-lcr]] 43.6667%×1.0 |
| 지시 따르기 | 56.2 | +0.42 | 실측 | [[ifbench]] 55.1701%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
