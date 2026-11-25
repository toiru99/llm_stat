---
type: Model
title: GLM-4.7 (non-reasoning)
creator: Z AI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.511
output_speed_tps: 73.8681538943761
context_window: 200000
status: past
size_class: Large
params_b: 357
is_reasoning: false
radar:
  knowledge: { s: 40.5, z: -0.31, r: 45.4, estimated: false }  # 전문 지식
  reasoning: { s: 24.2, z: -0.54, r: 41.9, estimated: false }  # 추론
  coding: { s: 46.0, z: 0.17, r: 52.5, estimated: false }  # 코딩
  agentic: { s: 70.5, z: 0.82, r: 62.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 45.9, z: -0.36, r: 44.6, estimated: false }  # 긴문맥
  instruction: { s: 59.7, z: 0.38, r: 55.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-4.7 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# GLM-4.7 (non-reasoning)

Z AI · Open · Large(357B) · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 지시 따르기
- **약점**: 긴문맥, 추론

## 실용 지표
`입력 $0.525 · 출력 $2.1 · 혼합 $0.511/1M · 73.8681538943761 t/s · TTFT 3.56546856126112s · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 45.4 | -0.31 | 실측 | [[gpqa-diamond]] 66.3636%×0.4, [[humanitys-last-exam]] 6.39481%×0.3 |
| 추론 | 41.9 | -0.54 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 66.3636%×1.0, [[humanitys-last-exam]] 6.39481%×1.0 |
| 코딩 | 52.5 | +0.17 | 실측 | [[terminal-bench]] 30.303%×0.5 |
| 에이전트 | 62.4 | +0.82 | 실측 | [[tau2-bench]] 94.152%×1.0, [[terminal-bench]] 30.303%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 44.6 | -0.36 | 실측 | [[aa-lcr]] 40.6667%×1.0 |
| 지시 따르기 | 55.8 | +0.38 | 실측 | [[ifbench]] 54.6259%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
