---
type: Model
title: GLM-4.7-Flash
creator: Z AI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.082
output_speed_tps: 88.94263598651075
context_window: 200000
status: past
size_class: Small
params_b: 31.2
is_reasoning: true
radar:
  knowledge: { s: 35.7, z: -0.54, r: 41.9, estimated: false }  # 전문 지식
  reasoning: { s: 21.9, z: -0.66, r: 40.1, estimated: false }  # 추론
  coding: { s: 33.3, z: -0.26, r: 46.1, estimated: false }  # 코딩
  agentic: { s: 66.5, z: 0.68, r: 60.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 47.0, z: -0.33, r: 45.1, estimated: false }  # 긴문맥
  instruction: { s: 68.4, z: 0.75, r: 61.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-4.7-Flash
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# GLM-4.7-Flash

Z AI · Open · Small(31.2B) · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 전문 지식, 추론

## 실용 지표
`입력 $0.07 · 출력 $0.4 · 혼합 $0.082/1M · 88.94263598651075 t/s · TTFT 11.337817726775091s · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 41.9 | -0.54 | 실측 | [[gpqa-diamond]] 58.0808%×0.4, [[humanitys-last-exam]] 7.59963%×0.3 |
| 추론 | 40.1 | -0.66 | 실측 | [[critpt]] 0.285714%×1.0, [[gpqa-diamond]] 58.0808%×1.0, [[humanitys-last-exam]] 7.59963%×1.0 |
| 코딩 | 46.1 | -0.26 | 실측 | [[terminal-bench]] 21.9697%×0.5 |
| 에이전트 | 60.3 | +0.68 | 실측 | [[tau2-bench]] 98.8304%×1.0, [[terminal-bench]] 21.9697%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 45.1 | -0.33 | 실측 | [[aa-lcr]] 41.6667%×1.0 |
| 지시 따르기 | 61.2 | +0.75 | 실측 | [[ifbench]] 60.8163%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
