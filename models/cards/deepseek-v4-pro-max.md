---
type: Model
title: DeepSeek V4 Pro (max)
creator: DeepSeek
license: Open
intelligence_index: None
price_blended_usd_1m: 0.7148
output_speed_tps: 71.1838233748741
context_window: 1000000
status: past
size_class: Large
params_b: 1600
is_reasoning: true
radar:
  knowledge: { s: 73.6, z: 1.3, r: 69.5, estimated: false }  # 전문 지식
  reasoning: { s: 59.1, z: 1.19, r: 67.8, estimated: false }  # 추론
  coding: { s: 71.5, z: 1.03, r: 65.4, estimated: false }  # 코딩
  agentic: { s: 73.7, z: 0.94, r: 64.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 84.2, z: 0.81, r: 62.2, estimated: false }  # 긴문맥
  instruction: { s: 90.4, z: 1.66, r: 74.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — DeepSeek V4 Pro (max)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# DeepSeek V4 Pro (max)

DeepSeek · Open · Large(1600B) · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $1.50162 · 출력 $3.2 · 혼합 $0.7148/1M · 71.1838233748741 t/s · TTFT 2.20187605405662s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 69.5 | +1.3 | 실측 | [[gpqa-diamond]] 88.7879%×0.4, [[humanitys-last-exam]] 37.5348%×0.3 |
| 추론 | 67.8 | +1.19 | 실측 | [[critpt]] 12.8571%×1.0, [[gpqa-diamond]] 88.7879%×1.0, [[humanitys-last-exam]] 37.5348%×1.0 |
| 코딩 | 65.4 | +1.03 | 실측 | [[scicode]] 50.8102%×1.0, [[terminal-bench]] 46.2121%×0.5 |
| 에이전트 | 64.1 | +0.94 | 실측 | [[gdpval]] 1165.81 Elo×1.0, [[tau2-bench]] 96.1988%×1.0, [[tau3-banking]] 30.1031%×1.0, [[terminal-bench]] 46.2121%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 62.2 | +0.81 | 실측 | [[aa-lcr]] 74.6667%×1.0 |
| 지시 따르기 | 74.9 | +1.66 | 실측 | [[ifbench]] 76.4626%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
