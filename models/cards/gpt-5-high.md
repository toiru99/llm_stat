---
type: Model
title: GPT-5 (high)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.3375
output_speed_tps: 78.2113787700899
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 66.0, z: 0.93, r: 64.0, estimated: false }  # 전문 지식
  reasoning: { s: 47.0, z: 0.59, r: 58.8, estimated: false }  # 추론
  coding: { s: 49.4, z: 0.28, r: 54.2, estimated: false }  # 코딩
  agentic: { s: 59.1, z: 0.42, r: 56.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 79.6, z: 0.42, r: 56.3, estimated: false }  # 멀티모달
  long_context: { s: 88.2, z: 0.93, r: 64.0, estimated: false }  # 긴문맥
  instruction: { s: 85.6, z: 1.46, r: 71.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# GPT-5 (high)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 멀티모달, 코딩

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $1.3375/1M · 78.2113787700899 t/s · TTFT 50.6598365585722s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 64.0 | +0.93 | 실측 | [[gpqa-diamond]] 85.3535%×0.4, [[humanitys-last-exam]] 28.4986%×0.3 |
| 추론 | 58.8 | +0.59 | 실측 | [[critpt]] 5.71429%×1.0, [[gpqa-diamond]] 85.3535%×1.0, [[humanitys-last-exam]] 28.4986%×1.0 |
| 코딩 | 54.2 | +0.28 | 실측 | [[terminal-bench]] 32.5758%×0.5 |
| 에이전트 | 56.3 | +0.42 | 실측 | [[gdpval]] 925.82 Elo×1.0, [[tau2-bench]] 84.7953%×1.0, [[tau3-banking]] 22.0619%×1.0, [[terminal-bench]] 32.5758%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 56.3 | +0.42 | 실측 | [[mmmu-pro]] 74.2197%×1.0 |
| 긴문맥 | 64.0 | +0.93 | 실측 | [[aa-lcr]] 78.2%×1.0 |
| 지시 따르기 | 71.9 | +1.46 | 실측 | [[ifbench]] 73.0612%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
