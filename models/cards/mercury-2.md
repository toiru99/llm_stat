---
type: Model
title: Mercury 2
creator: Inception
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.1425
output_speed_tps: 326.170408795022
context_window: 128000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 53.8, z: 0.34, r: 55.1, estimated: false }  # 전문 지식
  reasoning: { s: 34.0, z: -0.06, r: 49.1, estimated: false }  # 추론
  coding: { s: 47.2, z: 0.21, r: 53.1, estimated: false }  # 코딩
  agentic: { s: 42.4, z: -0.17, r: 47.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 49.2, z: -0.26, r: 46.1, estimated: false }  # 긴문맥
  instruction: { s: 81.0, z: 1.27, r: 69.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mercury 2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Mercury 2

Inception · Proprietary · Unknown · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $0.25 · 출력 $0.75 · 혼합 $0.1425/1M · 326.170408795022 t/s · TTFT 3.61698649542101s · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 55.1 | +0.34 | 실측 | [[gpqa-diamond]] 76.9697%×0.4, [[humanitys-last-exam]] 17.1455%×0.3 |
| 추론 | 49.1 | -0.06 | 실측 | [[critpt]] 0.84898%×1.0, [[gpqa-diamond]] 76.9697%×1.0, [[humanitys-last-exam]] 17.1455%×1.0 |
| 코딩 | 53.1 | +0.21 | 실측 | [[scicode]] 37.7315%×1.0, [[terminal-bench]] 26.5152%×0.5 |
| 에이전트 | 47.5 | -0.17 | 실측 | [[gdpval]] 501.39 Elo×1.0, [[tau2-bench]] 70.7602%×1.0, [[tau3-banking]] 9.48454%×1.0, [[terminal-bench]] 26.5152%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 46.1 | -0.26 | 실측 | [[aa-lcr]] 43.6667%×1.0 |
| 지시 따르기 | 69.1 | +1.27 | 실측 | [[ifbench]] 69.7959%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
