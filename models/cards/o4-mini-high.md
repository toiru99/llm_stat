---
type: Model
title: o4-mini (high)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.8525
output_speed_tps: 104.622970585604
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 54.4, z: 0.37, r: 55.5, estimated: false }  # 전문 지식
  reasoning: { s: 34.0, z: -0.06, r: 49.2, estimated: false }  # 추론
  coding: { s: 23.0, z: -0.61, r: 40.9, estimated: false }  # 코딩
  agentic: { s: 39.5, z: -0.27, r: 46.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 73.0, z: 0.08, r: 51.2, estimated: false }  # 멀티모달
  long_context: { s: 68.8, z: 0.34, r: 55.1, estimated: false }  # 긴문맥
  instruction: { s: 79.5, z: 1.21, r: 68.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — o4-mini (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# o4-mini (high)

OpenAI · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $1.1 · 출력 $4.4 · 혼합 $0.8525/1M · 104.622970585604 t/s · TTFT 21.2509999307555s · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 55.5 | +0.37 | 실측 | [[gpqa-diamond]] 78.3838%×0.4, [[humanitys-last-exam]] 16.5431%×0.3 |
| 추론 | 49.2 | -0.06 | 실측 | [[critpt]] 0.571429%×1.0, [[gpqa-diamond]] 78.3838%×1.0, [[humanitys-last-exam]] 16.5431%×1.0 |
| 코딩 | 40.9 | -0.61 | 실측 | [[terminal-bench]] 15.1515%×0.5 |
| 에이전트 | 46.0 | -0.27 | 실측 | [[tau2-bench]] 55.5556%×1.0, [[terminal-bench]] 15.1515%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 51.2 | +0.08 | 실측 | [[mmmu-pro]] 69.2486%×1.0 |
| 긴문맥 | 55.1 | +0.34 | 실측 | [[aa-lcr]] 61%×1.0 |
| 지시 따르기 | 68.1 | +1.21 | 실측 | [[ifbench]] 68.7075%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
