---
type: Model
title: GLM-4.7-Flash (non-reasoning)
creator: Z AI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.082
output_speed_tps: 66.9433723506075
context_window: 200000
status: past
size_class: Small
params_b: 31.2
is_reasoning: false
radar:
  knowledge: { s: 25.6, z: -1.03, r: 34.6, estimated: false }  # 전문 지식
  reasoning: { s: 15.4, z: -0.98, r: 35.3, estimated: false }  # 추론
  coding: { s: 5.7, z: -1.19, r: 32.1, estimated: false }  # 코딩
  agentic: { s: 49.2, z: 0.07, r: 51.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 22.9, z: -1.06, r: 34.0, estimated: false }  # 긴문맥
  instruction: { s: 47.9, z: -0.1, r: 48.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GLM-4.7-Flash (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# GLM-4.7-Flash (non-reasoning)

Z AI · Open · Small(31.2B) · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 지시 따르기
- **약점**: 긴문맥, 코딩

## 실용 지표
`입력 $0.07 · 출력 $0.4 · 혼합 $0.082/1M · 66.9433723506075 t/s · TTFT 15.808375627966585s · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 34.6 | -1.03 | 실측 | [[gpqa-diamond]] 45.1515%×0.4, [[humanitys-last-exam]] 4.95829%×0.3 |
| 추론 | 35.3 | -0.98 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 45.1515%×1.0, [[humanitys-last-exam]] 4.95829%×1.0 |
| 코딩 | 32.1 | -1.19 | 실측 | [[terminal-bench]] 3.78788%×0.5 |
| 에이전트 | 51.1 | +0.07 | 실측 | [[tau2-bench]] 91.8129%×1.0, [[terminal-bench]] 3.78788%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 34.0 | -1.06 | 실측 | [[aa-lcr]] 20.3333%×1.0 |
| 지시 따르기 | 48.4 | -0.1 | 실측 | [[ifbench]] 46.2585%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
