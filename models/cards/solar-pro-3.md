---
type: Model
title: Solar Pro 3
creator: Upstage
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.1005
output_speed_tps: 117.677326492112
context_window: 128000
status: past
size_class: Medium
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 46.8, z: 0.0, r: 50.0, estimated: false }  # 전문 지식
  reasoning: { s: 28.3, z: -0.34, r: 44.9, estimated: false }  # 추론
  coding: { s: 24.1, z: -0.57, r: 41.4, estimated: false }  # 코딩
  agentic: { s: 36.2, z: -0.38, r: 44.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 36.5, z: -0.65, r: 40.2, estimated: false }  # 긴문맥
  instruction: { s: 83.0, z: 1.35, r: 70.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Solar Pro 3
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Solar Pro 3

Upstage · Proprietary · Medium · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $0.15 · 출력 $0.6 · 혼합 $0.1005/1M · 117.677326492112 t/s · TTFT 1.82351997258322s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 50.0 | +0.0 | 실측 | [[gpqa-diamond]] 72.4242%×0.4, [[humanitys-last-exam]] 10.2873%×0.3 |
| 추론 | 44.9 | -0.34 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 72.4242%×1.0, [[humanitys-last-exam]] 10.2873%×1.0 |
| 코딩 | 41.4 | -0.57 | 실측 | [[scicode]] 25.463%×1.0, [[terminal-bench]] 7.57576%×0.5 |
| 에이전트 | 44.2 | -0.38 | 실측 | [[gdpval]] 271.72 Elo×1.0, [[tau2-bench]] 86.2573%×1.0, [[tau3-banking]] 8.65979%×1.0, [[terminal-bench]] 7.57576%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 40.2 | -0.65 | 실측 | [[aa-lcr]] 32.3333%×1.0 |
| 지시 따르기 | 70.3 | +1.35 | 실측 | [[ifbench]] 71.2018%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
